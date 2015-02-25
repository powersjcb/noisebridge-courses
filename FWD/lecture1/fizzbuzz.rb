def fizzbuzz(n, opt)
  str = ''

  opt.each do |key, value|
    if n % value == 0
      str.concat(key)
    end 
  end
  

  if str ==''
    return n
  else
    return str
  end

end

opt = {"Fizz" => 3, "Buzz" => 5, "Bang" => 7}


(1..105).to_a.each do |num|
  puts fizzbuzz(num,opt)
end

