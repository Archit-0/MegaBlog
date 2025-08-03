import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.AppWriteUrl)
      .setProject(conf.AppWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
         await this.logout(); 
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }
  async logout() {
    try {
      await this.account.deleteSession("current");
      return true;
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.error("Failed to get current user:", error);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
