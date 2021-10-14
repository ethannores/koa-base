const list  = async ctx=>{
  // const data = a
  // ctx.utils.assert(false, ctx.utils.throwError(10001, 'age 是必须的'))
  ctx.body = '返回结果'
}
const list1  = async ctx=>{
  // const data = a
  // ctx.utils.assert(false, ctx.utils.throwError(10001, 'age 是必须的'))
  ctx.body = '返回结果b'
}

module.exports={
  list,list1
}