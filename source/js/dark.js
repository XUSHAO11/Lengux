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
         $('.bgimg').css({
            'color': '#f4f4f4',
          });
          $('.list-unstyled>li>a').css({
            'color': '#f4f4f4',
          });
          $('.fst-italic').css({
            'color': '#fff',
          });
         
          
      }else{
        $('.bgimg').css({
          'color': '#212529',
        });
        $('.list-unstyled>li>a').css({
          'color': '#212529',
        });
        $('.fst-italic').css({
          'color': '#212529',
        });
       
      }
    }
  }
});

// 配置 MutationObserver 监听属性改变
const config = { attributes: true };

// 开始监听目标元素
observer.observe(targetElement, config);