import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'services/navigation_service.dart';
import 'services/api_service.dart';
import 'state/state_management.dart';
import 'screens/qr_scanner_screen.dart';
import 'screens/voting_screen.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => StateManagement()),
        Provider(create: (_) => NavigationService()),
        Provider(create: (_) => APIService()),
      ],
      child: MainApp(),
    ),
  );
}

class MainApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final NavigationService navigationService =
        Provider.of<NavigationService>(context, listen: false);

    return MaterialApp(
      title: 'Hackathon Voting App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      navigatorKey: navigationService.navigatorKey,
      initialRoute: '/',
      onGenerateRoute: (settings) {
        switch (settings.name) {
          case '/':
            return MaterialPageRoute(builder: (_) => QRScannerScreen());
          case '/voting':
            return MaterialPageRoute(builder: (_) => VotingScreen());
          default:
            return MaterialPageRoute(builder: (_) => QRScannerScreen());
        }
      },
    );
  }
}
