EmberCli.configure do |c|
  c.app :frontend, path: Rails.root.join('ember'), yarn: true
end
