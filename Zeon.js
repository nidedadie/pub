var UserSQL={
    //插入用户
    insertUser:'insert into user(username,password) values(?,?)',
    //删除用户
    deleteUserByID:'delete from user where UserId=?',
    //登录查询
    loginQuery:'select UserId,username,password from user where username=? and password=? ',
    //查询所有用户信息
    queryAllUser:'select UserId,username,password from user',
    //根据用户ID查询用户信息
    queryUserById:'select UserId,username,password from user where UserId=?',
    //根据用户ID查询用户信息
    updateUserById:'update user set username=?,password=? where UserId=?',
};
    module.exports=UserSQL;
