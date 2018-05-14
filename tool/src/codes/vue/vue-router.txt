this.$router.push('/dashboadr')
this.$router.push({ path: `/user/${userId}` })
this.$router.push({ name: 'user', params: { userId: 123 }})// 命名的路由
this.$router.push({ path: 'register', query: { plan: 'private' }}) // 带查询参数，变成 /register?plan=private

this.$router.replace('/dashboadr')

this.$router.go(-1) // 后退
this.$router.go(1) // 前进

this.$route.path
this.$route.params
this.$route.query
this.$route.matched
this.$route.name

