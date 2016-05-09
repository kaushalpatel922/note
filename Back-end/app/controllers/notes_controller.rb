class NotesController < ApplicationController
  before_action :find_note, only: [:show, :edit, :update, :destroy]

  def index
    @notes = Note.where(user_id: current_user).reverse
    render json: @notes
    # @notes = Note.where(user_id: current_user).order(params[:sort])
  end

  def show
    @notes = Note.find(params[:id])
    render json: @note
  end

  def new
    @note = current_user.notes.build
    render :json => @notes
  end

  def create
    @note = current_user.notes.build(note_params)

    if @note.save
      render 'show', formats: [:json], handlebars: [:jbuilder], status: 201
    else
      render 'new', json: {error: "note not created"}
    end
  end

  #
  # if @contact.save
  #     render 'show', formats: [:json], handlebars: [:jbuilder], status: 201
  #   else
  #     render json: {error: "Contact could  be created"}
  #   end
  # end



  def edit
  end

  def update
    if @note.update(note_params)
      redirect_to @note
    else
      render 'edit'
    end
  end

  def destroy
    @note.destroy
    redirect_to notes_path
  end

  private

  def find_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:title, :content)
  end
end
