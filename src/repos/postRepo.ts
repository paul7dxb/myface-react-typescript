import {database, single} from "./database";
import {Post} from "../models/database/post";
import {PostModel} from "../models/api/postModel";
import {InteractionType} from "../models/database/interaction";
import {CreatePostRequest} from "../models/api/createPostRequest";
import moment from "moment";
import knex from "knex";

interface PostsFilter {
    postedById?: number;
}

function getPostsQuery(filter: PostsFilter): knex.QueryBuilder {
    let query =  database<Post>('posts')
        .select('*');

    if (filter.postedById) {
        query = query.where('userId', filter.postedById);
    }

    return query
}

export async function getPosts(page: number, pageSize: number, filter: PostsFilter = {}): Promise<Post[]> {
    return getPostsQuery(filter)
        .orderBy('createdAt', 'desc')
        .limit(pageSize)
        .offset((page - 1) * pageSize);
}

export async function countPosts(filter: PostsFilter = {}): Promise<number> {
    const result = await getPostsQuery(filter).count({count: "*"}).first();
    return result['count'];
}

export async function getPost(postId: number): Promise<Post> {
    const posts = await database<Post>('posts')
        .select('*')
        .where('id', postId);

    return single(posts);
}

export async function getPostsByUserInteraction(page: number, pageSize: number, userId: number, interactionType: InteractionType): Promise<PostModel[]>  {
    return database<Post>('posts')
        .innerJoin('interactions', 'interactions.postId', 'posts.id')
        .innerJoin('users', 'users.id', 'interactions.userId')
        .select('posts.*')
        .where('users.id', userId)
        .where('interactions.interactionType', interactionType)
        .orderBy('interactions.date', 'desc')
        .limit(pageSize)
        .offset((page - 1) * pageSize);
}


export async function getPostsUserLiked(
    page: number,
    pageSize: number,
    userId: number,
    interactionType: InteractionType
  ): Promise<Post[]> {
    return database<Post>("posts")
      .innerJoin("interactions", "interactions.postId", "posts.id")
      .innerJoin("users", "users.id", "interactions.userId")
      .select("posts.*")
      .where("users.id", userId)
      .where("interactions.interactionType", interactionType)
      .orderBy("interactions.date", "desc")
      .limit(pageSize)
      .offset((page - 1) * pageSize);
  }
  
  export async function getPostsByUser(
    page: number,
    pageSize: number,
    userId: number,
  ): Promise<Post[]> {
    return database<Post>("posts")
      .select("*")
      .where("userId", userId)
      .limit(pageSize)
      .offset((page - 1) * pageSize);
  }

export async function createPost(newPost: CreatePostRequest): Promise<void> {
    await database<Post>('posts')
        .insert({
            message: newPost.message,
            imageUrl: newPost.imageUrl,
            userId: 1,
            createdAt: database.fn.now(),
        }, '*');
}