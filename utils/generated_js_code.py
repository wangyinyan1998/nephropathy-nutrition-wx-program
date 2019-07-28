code = '''/**
Created by Machine
**/
'''
code = code + "//------------------onLoad----------------------------"
food_list = ["Cereal", "Veg", "Fruit", "Milk", "MeatEgg", "Grease", "Nuts"]
for food in food_list:
    code = code + '''
    var choosed{0}_projection = [];
    var k = 0;
    for (var i = 0; i < this.data.choosed{0}.length; i++) {{
      for (var j = 0; j < this.data.choosed{0}[i].copyArray.length; j++) {{
        var xx = 0;
        var yy = kk;
        if (kk >= 10) {{
          xx = 1;
          yy = kk - 10;
        }}
        choosed{0}_projection.push({{
          name: this.data.choosed{0}[i].name,
          weight: this.data.choosed{0}[i].weight,
          projection: i,
          projection_copy: j,
          projection_index: k,
          projection_bind: "onMoved{0}_" + k,
          x: xx * 126,
          y: yy * 40
        }});
        k++;
      }}
      kk++;
    }}
    this.setData({{
      choosed{0}_projection: choosed{0}_projection
    }});

'''.format(food)

code = code + "//------------------eventBind----------------------------"
for food in food_list:
    for i in range(10):
        code = code + '''
  onMoved{0}_{1}: function (e) {{
    var index = {1};
    var choosedData_projection = this.data.choosed{0}_projection;
    choosedData_projection[index].x = e.detail.x;
    choosedData_projection[index].y = e.detail.y;
    this.setData({{
      choosed{0}_projection: choosedData_projection
    }});
  }},
'''.format(food,i)
with open("generated_js_code.txt","w") as coder:
    coder.write(code)