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
          $('.header-top').css({
            'border-bottom': '1px solid',
          });
          $('.position-static').css({
            'color': '#f4f4f4',
          });
          $('.list-unstyled>li>a').css({
            'color': '#f4f4f4',
          });
          $('.fst-italic').css({
            'color': '#f4f4f4',
          });
          
      }else{
        $('.header-top').css({
          'border-bottom': '1px solid #f1f4f8;',
        });
        $('.position-static').css({
          'color': 'black',
        });
        $('.list-unstyled>li>a').css({
          'color': 'black',
        });
        $('.fst-italic').css({
          'color': 'black',
        });
      }
    }
  }
});

// 配置 MutationObserver 监听属性改变
const config = { attributes: true };

// 开始监听目标元素
observer.observe(targetElement, config);