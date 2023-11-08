import mongoose,{model,Schema} from "mongoose";

type Article ={
    ArticleTitle:string;
    body:string;
    Banner_location: string
}

// Create a Mongoose schema for the Article type
const articleSchema = new mongoose.Schema<Article>({
  ArticleTitle: String,
  body: String,
  Banner_location: String
});

// Create a Mongoose model for the Article type
const Article = mongoose.model("Article", articleSchema);

export default Article;
