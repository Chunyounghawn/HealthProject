import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:health/main.dart';
import 'package:health/waterController.dart';
import 'package:health/waterchart.dart';


import 'controller.dart';

void main() {
  runApp(const MyApp());

}

class Water extends StatefulWidget {
  const Water({Key? key}) : super(key: key);

  @override
  _Water createState() => _Water();

  Widget build(BuildContext context) {
    return const MaterialApp(
      title: '플러터 앱',
 // debug 표시 보지않기
      home: Scaffold(
        body: Text("현재 물 섭취 량"),
      ),
    );
  }
}

class _Water extends State<Water> {
  final waterContoller = Get.put(WaterController(0, 0));
  final Controller controller = Get.put(Controller());

  // final waterchart = Get.put(WaterController(0))
  String ml = '';

  @override
  Widget build(BuildContext context) {
    return GetBuilder<WaterController>(builder: (_) {
      return MaterialApp(
        home: DefaultTabController(
          length: 4,
          child: Scaffold(
            appBar: AppBar(
              title: const Text("Health Together"),
              leading: IconButton(onPressed: (){Get.back();}, icon: Icon(Icons.chevron_left)),

            ),
            body: Center(
              child: Container(
                  margin: EdgeInsets.all(0),
                  color: Colors.white,
                  child: Column(
                    children: [
                      Expanded(
                          flex: 1,
                          child: Container(
                            color: Colors.white,
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                Text(
                                  '오늘 섭취량',
                                  style: TextStyle(fontSize: 20),
                                )
                                // 1번째칸
                              ],
                            ),
                          )),
                      Expanded(
                          flex: 1,
                          child: Container(
                            color: Colors.white,
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.end,
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: [
                                Container(
                                  margin: EdgeInsets.only(left: 410, right: 20),
                                  child: Text(
                                    '목표 섭취량(ml)',
                                    style: TextStyle(
                                        fontSize: 13, color: Colors.blue),
                                    textAlign: TextAlign.right,
                                  ),
                                ),
                                Container(
                                  margin: EdgeInsets.only(
                                      left: 410, right: 20, bottom: 10),
                                  child: TextField(
                                    onChanged: (text) {
                                      waterContoller.goal = int.parse(text);
                                      waterContoller.setMl(int.parse(text));
                                      //ml = text;
                                    },
                                    // onEditingComplete: (){
                                    //   waterContoller.setMl(int.parse(ml));
                                    //   waterContoller.update();
                                    // },
                                    decoration: InputDecoration(
                                      isDense: true,
                                      contentPadding: EdgeInsets.all(5),
                                    ),
                                  ),
                                )
                              ],

                              //2번
                            ),
                          )),
                      Expanded(
                          flex: 5,
                          //child: Container(),
                          child: Container(
                            margin: EdgeInsets.all(5),
                            // child: Column(
                            //   children: [
                            child: waterchart(),
                            // ],
                            // ),
                          )),
                      Expanded(
                          flex: 2,
                          child: Container(
                            color: Colors.white,
                            child: Column(
                              children: [
                                Row(mainAxisAlignment: MainAxisAlignment.center,
                                    // crossAxisAlignment:CrossAxisAlignment.start,
                                    children: [
                                      Container(
                                        margin:
                                            EdgeInsets.only(top: 10, left: 20),
                                        child: Column(
                                          children: [
                                            Text(
                                              '남은 섭취량',
                                              style: TextStyle(
                                                  fontSize: 13,
                                                  color: Colors.blue),
                                            ),
                                            Text(
                                              '${waterContoller.goal - (waterContoller.goal - waterContoller.ml)}',
                                              // style: TextStyle(
                                              //     fontSize: 13, color: Colors.blue),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Container(
                                        margin:
                                            EdgeInsets.only(top: 10, left: 110),
                                        child: Column(
                                          children: [
                                            Text(
                                              '현재 섭취량',
                                              style: TextStyle(
                                                  fontSize: 13, color: Colors.blue),
                                            ),
                                            Text(
                                              '${waterContoller.goal - waterContoller.ml}',
                                              // style: TextStyle(
                                              //     fontSize: 13, color: Colors.blue),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Container(
                                        margin: EdgeInsets.only(
                                            top: 10, left: 150, bottom: 20),
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.end,
                                          children: [
                                            ElevatedButton(
                                              onPressed: FlutterDialog,
                                              child: Text("설정하기"),
                                            )
                                          ],
                                        ),
                                      )
                                    ]
                                    //4번
                                    ),
                              ],
                            ),
                          )),
                      Expanded(
                        flex: 1,
                        child: Scaffold(
                          body: const TabBarView(
                            children: [
                              Home(),
                              Challenge(),
                              Calendar(),
                              Settings(),
                            ],
                          ),
                          bottomNavigationBar: Container(
                            color: Colors.white,
                            child: Container(
                              height: 70,
                              padding:
                                  const EdgeInsets.only(bottom: 5, top: 5),
                              child: const TabBar(
                                  labelColor: Colors.grey,
                                  indicatorColor: Colors.grey,
                                  unselectedLabelColor: Colors.black,
                                  tabs: [
                                    Tab(
                                      icon: Icon(Icons.home),
                                      text: 'Home',

                                    ),
                                    Tab(
                                      icon: Icon(
                                          Icons.insert_chart_outlined_rounded),
                                      text: 'Challenge',
                                    ),
                                    Tab(
                                      icon: Icon(Icons.calendar_month),
                                      text: 'Calendar',
                                    ),
                                    Tab(
                                      icon: Icon(Icons.settings),
                                      text: 'Setting',
                                    ),
                                  ]),
                            ),
                          ),
                        ),
                      ),
                    ],
                  )),
            ),
          ),
        ),
      );
    });
  }

  // ignore: non_constant_identifier_names
  void FlutterDialog() {
    showDialog(
        context: context,
        //barrierDismissible - Dialog를 제외한 다른 화면 터치 x
        barrierDismissible: false,
        builder: (BuildContext context) {
          int drink = 0;
          return AlertDialog(
            // RoundedRectangleBorder - Dialog 화면 모서리 둥글게 조절
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10.0)),
            //Dialog Main Title
            title: Column(
              children: const <Widget>[
                Text(
                  "마신 물의 양을 선택해 주세요",
                  style: TextStyle(fontSize: 12),
                ),
              ],
            ),
            //
            content: Container(
              height: 250,
              child: Column(
                children: [
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      ElevatedButton(
                        child: Text("180ml"),
                        onPressed: () {
                          waterContoller.minus(180);
                          Navigator.pop(context);
                        },
                      ),
                      ElevatedButton(
                        child: Text("250ml"),
                        onPressed: () {
                          waterContoller.minus(250);
                          Navigator.pop(context);
                        },
                      ),
                      ElevatedButton(
                        child: Text("400ml"),
                        onPressed: () {
                          waterContoller.minus(400);
                          Navigator.pop(context);
                        },
                      ),
                    ],
                  ),
                  TextField(
                    onChanged: (text) {
                      // waterContoller.setMl(int.parse(text));
                      // waterContoller.update();
                      drink = int.parse(text);
                    },
                    decoration: InputDecoration(
                        isDense: true,
                        contentPadding: EdgeInsets.all(5),
                        hintText: '마신 물(ml)'),
                  )
                ],
              ),
            ),

            actions: <Widget>[
              ElevatedButton(
                child: const Text("확인"),
                onPressed: () {
                  waterContoller.minus(drink);
                  Navigator.pop(context);
                },
              ),
            ],
          );
        });
  }
}
