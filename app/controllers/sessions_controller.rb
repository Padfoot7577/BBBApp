# frozen_string_literal: true

class SessionsController < ApplicationController
  def new
    redirect_to '/' if logged_in?
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user
      redirect_to user # redirect to the user's profile page
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    render :json => ''
  end
end
