class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :body, :published_at
end
