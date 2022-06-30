import 'package:get/get.dart';

class WaterController extends GetxController{

  int ml;
  WaterController(this.ml,this.goal);
  int goal;


  void setMl(int ml){
    this.ml = ml;
    update();
  }
  void minus(int i){
    this.ml -= i;
    update();
  }

}