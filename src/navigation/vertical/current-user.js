const userData = JSON.parse(localStorage.getItem('userData') || '{}')
export default [
  {
    title: userData.fullName,
    icon: { icon: 'tabler-user' },
    to: { name:'employees-id', params: {id: 50 }, query: {tab: 'profile'}},
    action: 'read',
    subject: 'AclDemo',
  },

]
