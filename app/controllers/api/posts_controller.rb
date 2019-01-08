class API::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create, :destroy, :update]

  def index
    posts = Post.all
    render json: { status: 'SUCCESS', message: 'Loaded posts', posts: posts }, status: :ok
  end

  def show
    post = Post.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded post', post: post }, status: :ok
  end

  def create
    post = Post.new(post_params)
    
    if post.save
      render json: { status: 'SUCCESS', message: 'Saved post', post: post }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Post not saved', post: post.errors }, status: :unprocessable_entity
    end
  end

  def update
    post = Post.find(params[:id])
    
    if post.update_attributes(post_params)
      render json: { status: 'SUCCESS', message: 'Updated post', post: post }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Post not updated', post: post.errors }, status: :unprocessable_entity     
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render json: { status: 'SUCCESS', message: 'Deleted post', post: post }, status: :ok
  end

  private
    def post_params
      params.require(:post).permit(:title, :body)
    end

end
