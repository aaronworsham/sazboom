MongoMapper.connection = Mongo::Connection.new('localhost', nil, :logger => logger)

case Padrino.env
  when :development then MongoMapper.database = 'sazboom_development'
  when :production  then MongoMapper.database = 'sazboom_production'
  when :test        then MongoMapper.database = 'sazboom_test'
end
