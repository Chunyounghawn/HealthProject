import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:health/waterController.dart';

// import 'package:percent_indicator/percent_indicator.dart';
import 'package:percent_indicator/circular_percent_indicator.dart';
import 'package:percent_indicator/percent_indicator.dart';

class waterchart extends StatefulWidget {
  const waterchart({Key? key}) : super(key: key);

  @override
  _waterchartState createState() => _waterchartState();
}

class _waterchartState extends State<waterchart> {
  final waterController = Get.find<WaterController>();

  // final waterController = Get.put(WaterController(ml, goal));
  Widget build(BuildContext context) {
    double percent = waterController.ml / waterController.goal;
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircularPercentIndicator(
              radius: 100,
              lineWidth: 30,
              percent: 1-percent,
              progressColor: Colors.blue,
              backgroundColor: Colors.blue.shade100,
              circularStrokeCap: CircularStrokeCap.round,
              center: Text(
                '${100-(percent * 100)}%',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 17),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
