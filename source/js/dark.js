// 目标元素
const targetElement = window.document.body

// 创建 MutationObserver 实例
const observer = new MutationObserver(function(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const currentClassNames = targetElement.classList;

      if (currentClassNames.contains('darkmode--activated')) {
        // 类名 'darkmode--activated' 已添加
        // 在此执行你的操作
        console.log("Dark mode activated");
         
          $('.list-unstyled>li>a').css({
            'color': '#f4f4f4',
          });
          $('.fst-italic').css({
            'color': '#f4f4f4',
          });
          $('.button-text').css({
            'color': '#f4f4f4',
          });
          $('.circle').css({
            'background': '#333',
          });
          $('#list').css({
            'stroke':'red'
          })
          $('.darksvg').css({
            'stroke':'white'
          })
          $('#linkshear>.darksvg').css({
            'stroke':'black'
          })
      }else{
        $('.position-static').css({
          'color': 'black',
        });
        $('.list-unstyled>li>a').css({
          'color': 'black',
        });
        $('.fst-italic').css({
          'color': 'black',
        });
        $('.button-text').css({
          'color': '#333',
        });
        $('.circle').css({
          'background': '#ddd',
        });
        $('.darksvg').css({
          'stroke':'black'
        })
        $('#list').css({
          'stroke':'black'
        })
       
      }
    }
  }
});

// 配置 MutationObserver 监听属性改变
const config = { attributes: true };

// 开始监听目标元素
observer.observe(targetElement, config);