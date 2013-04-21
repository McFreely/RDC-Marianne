require "rubygems"
require "sinatra"
require "mongoid"
require "slim"

Mongoid.load!("mongoid.yml")

# The document model for the results of the analysis
class Stat
  include Mongoid::Document
  field :title, type: String 
  field :total_count, type: Integer
  field :stat_positive, type: Integer
  field :stat_negative, type: Integer
  field :movie_poster, type: String
  field :trailer, type: String
  field :release_date, type: String, default: '2013'
  field :director, type: String
  field :runtime, type: String
  field :plot, type: String
end

get '/' do
  @stats = Stat.all
  slim :index
end

get '/movie/:title' do
  @stats = Stat.where(title: "#{params[:title]}")
  slim :movie
end
