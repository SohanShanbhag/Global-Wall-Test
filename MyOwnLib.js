function collide(ob1,ob2){
  bulletRE = ob1.x + ob1.width;
  wallLE = ob2.x;  

  if(bulletRE >= wallLE){
    return true;
  }else{
    return false;
  }
}