<template lang="pug">
b-container#lettersPage.mt-5
  b-row
    b-col(cols='12')
      b-nav(tabs align="center")
        b-nav-item(to='/lettersPage/all' exact exact-active-class='active') 所有消息
        b-nav-item(to='/lettersPage/news' exact exact-active-class='active') 新聞
        b-nav-item(to='/lettersPage/announcement' exact exact-active-class='active') 公告
        b-nav-item(to='/lettersPage/promote' exact exact-active-class='active') 推廣
        b-nav-item(to='/lettersPage/other' exact exact-active-class='active') 其他
    b-col(cols='12')
      router-view
</template>
