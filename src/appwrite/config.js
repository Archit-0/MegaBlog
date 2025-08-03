import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class DatabaseServices {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.AppWriteUrl)
      .setProject(conf.AppWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.AppWriteDatabaseId,
        conf.AppWriteCollectionId,
        slug,
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Failed to create post:", error);
      throw error;
    }
  }
  
  async updatePost(slug, { title, content, featuredImage, status }) {
    // slug refer to ID
    try {
      return await this.databases.updateDocument(
        conf.AppWriteDatabaseId,
        conf.AppWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.AppWriteDatabaseId,
        conf.AppWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.AppWriteDatabaseId,
        conf.AppWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }
  async getPosts(query = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.AppWriteDatabaseId,
        conf.AppWriteCollectionId,
        query
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.AppWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Failed to upload file:", error);
      throw error;
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.AppWriteBucketId, fileId);
    } catch (error) {
      console.error("Failed to delete file:", error);
      throw error;
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.AppWriteBucketId, fileId);
  }
}

const DatabaseService = new DatabaseServices();
export default DatabaseService;
