import 'package:flutter/services.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import '../services/api_service.dart';
import '../services/navigation_service.dart';
import '../state/state_management.dart';

class QRScannerController {
  final APIService apiService;
  final StateManagement stateManagement;
  final NavigationService navigationService;

  QRScannerController({
    required this.apiService,
    required this.stateManagement,
    required this.navigationService,
  });

  Future<void> scanQRCode() async {
    String barcodeScanRes;
    try {
      barcodeScanRes = await FlutterBarcodeScanner.scanBarcode(
        '#ff6666',
        'Cancel',
        true,
        ScanMode.QR,
      );
    } on PlatformException {
      barcodeScanRes = 'Failed to get platform version.';
      return;
    }

    if (barcodeScanRes == '-1') {
      // User canceled the scan
      return;
    }

    try {
      final hackathon = await apiService.getHackathonDetails(barcodeScanRes);
      stateManagement.updateHackathonState(hackathon);
      navigationService.navigateToVoting();
    } catch (e) {
      print('Error fetching hackathon details: $e');
      // Here you might want to show an error message to the user
    }
  }
}
