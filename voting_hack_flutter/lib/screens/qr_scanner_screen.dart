import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../controllers/qr_scanner_controller.dart';
import '../state/state_management.dart';

class QRScannerScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final controller = QRScannerController(
      apiService: Provider.of(context, listen: false),
      stateManagement: Provider.of(context, listen: false),
      navigationService: Provider.of(context, listen: false),
    );

    return Scaffold(
      appBar: AppBar(
        title: Text('Scan Hackathon QR Code'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () async {
                await controller.scanQRCode();
              },
              child: Text('Scan QR Code'),
            ),
            SizedBox(height: 20),
            Consumer<StateManagement>(
              builder: (context, stateManagement, child) {
                final hackathon = stateManagement.currentHackathon;
                if (hackathon != null) {
                  return Text('Connected to: ${hackathon.name}');
                }
                return SizedBox.shrink();
              },
            ),
          ],
        ),
      ),
    );
  }
}
