class MyHash

  LOAD_FACTOR = 0.7


  #NOTES
  # We are going to need an array.
  # we're going to need to give that array
  # a size.

  def initialize
    @size = 10
    @array = Array.new(@size) { [] }
    @count = 0
  end


  def []=(key, value)

    @count += 1

    resize if (@count.to_f / @size > LOAD_FACTOR)
    #entering values to hash table
    slot_number = h(key)
    dynamic_array = @array[h(key)]
    # What cases do we have to handle?
    kv_pair = dynamic_array.find { |pair|
      pair[0] == key  
    }
    if kv_pair
      #kv_pair => [:foo, 2718]
      kv_pair[1] = value
    else
      #Didn't find a match.   ## "<<" equivalent to '.push()'
      @array[slot_number]  << [key, value]
    end
  end

  def [](key)
    slot_number = h(key)
    dynamic_array = @array[h(key)]
    # What cases do we have to handle?
    kv_pair = dynamic_array.find { |pair|
      pair[0] == key  
    }
    kv_pair[1] if kv_pair
    # @array[h(key)] # => [ [k_0, v_0], [k_1, v_1] ]
  end


  private
    def h(key)
      key.hash % @size
    end

    def resize
      old_array = @array
      @size *= 2
      @array = Array.new(@size) { [] }
      @count = 0
      old_array.each do |dynamic_array|
        dynamic_array.each do |key, value|
          self[key] = value
        end
      end
    end
end