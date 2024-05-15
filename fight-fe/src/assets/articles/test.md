# 测试文章

## CSS

1. CSS单位都有哪些？（em和rem的区别）
2. 如何隐藏一个元素？
3. 什么是高度塌陷？怎么清除浮动？
   1. 父元素overflow: hidden
   2. 加个空元素，clear: both
   3. ::after, clear: both
4. 怎么设置居中？
   1. flex
   2. absolute + top + left + transform
   3. absolute + magrin: 0
   4. absolute + calc / margin: -
   5. text-align: center
5. CSS3新增的内容？
6. BFC是什么？
7. Flex布局？
8. 响应式布局？
9. 渲染过程是什么？
    1. 解析HTML得到DOM树和CSSOM树
    2. 样式计算，把预设值转换成真实值
    3. 分层，dom树分层，提高效率（z-index啥的）
    4. 绘制，每层绘制，交给合成进程，分块
    5. 光栅化，交给GPU进程，得到位图
    6. 最后完成屏幕成像，合成进程根据位图得到结果
10. flex的几个属性含义与作用是什么？
11. 两栏布局
12. 三栏布局
13. 0.5px
14. css样式隔离
