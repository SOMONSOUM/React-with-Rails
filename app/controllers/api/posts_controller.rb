class API::PostsController < ApplicationController

  def index
    @posts = Post.all

    render json: { posts: @posts }
  end

  def create
    render json: { params: params }
  end

end
