Sazboom.controllers :Pages do
  get :home, :map => '/' do
    render 'pages/home'
  end 
  
  get :clients, :map => '/clients' do
    render 'pages/clients'
  end 
  
  get :services, :map => '/services' do
    render 'pages/services'
  end
  
  get :price, :map => '/price' do
    render 'pages/price'
  end
  
  get :about, :map => '/about' do
    render 'pages/about'
  end
  
  

  # get :sample, :map => "/sample/url", :respond_to => [:any, :js] do
  #   case content_type
  #     when :js then ...
  #     else ...
  # end

  # get :foo, :with => :id do
  #   "Maps to url '/foo/#{params[:id]}'"
  # end

  # get "/example" do
  #   "Hello world!"
  # end

  
end