class BandsController < ApplicationController

before_action :ensure_logged_in, only: [:new, :create]

    def new
        @band = Band.new
        render :new
    end

    def index
        @bands = Band.all 
        render :index
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            render :index
        else
            flash.now[:errors] = @band.errors.full_messages
            redirect_to new_band_url
        end
    end

    def show
        @band = Band.find(params[:id])
        redirect_to band_url(@band) 
    end

    def destroy
        @band = Band.find(params[:id])
        @band.delete
        render :index
    end

    private
    def band_params
        params.require(:band).permit(:name)
    end
end