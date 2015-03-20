require "./my_hash"
require "pry"

RSpec.describe MyHash do
  it "sets and retrieves a value at a key" do
    some_hash  = MyHash.new
    some_hash[:foo] = 3
    expect(some_hash[:foo]).to eq(3)
  end

  it "return nil if a key isn't in the hash" do
    some_hash = MyHash.new
    expect(some_hash[:var]).to eq(nil)
  end

  it "handles collisions" do
    some_hash = MyHash.new

    expect(some_hash).to receive(:h).with(:foo).and_return(5).at_least(:once)
    expect(some_hash).to receive(:h).with(:bar).and_return(5).at_least(:once)

    some_hash[:foo] = 2718
    expect(some_hash[:foo]).to eq(2718)

    some_hash[:bar] = 3141
    expect(some_hash[:foo]).to eq(2718)
    expect(some_hash[:bar]).to eq(3141)

  end

  it "should resize the array eventually" do
    some_hash = MyHash.new
    #put a bunch of values to test that hash resizes
    expect(some_hash.instance_variable_get("@size")).to eq(10)

    8.times {|i| some_hash[i] = i.to_s}

    8.times do |i|
      expect(some_hash[i]).to eq(i.to_s)
    end


    expect(some_hash.instance_variable_get("@size")).to eq(20)


  end

end