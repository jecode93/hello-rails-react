require 'test_helper'

class Api::V1::RandomControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get api_v1_random_index_url
    assert_response :success
  end
end
