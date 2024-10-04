import 'package:flutter/material.dart';

class NavigationService {
  final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

  Future<dynamic> navigateTo(String routeName, {Object? arguments}) {
    return navigatorKey.currentState!
        .pushNamed(routeName, arguments: arguments);
  }

  void goBack() {
    return navigatorKey.currentState!.pop();
  }

  Future<dynamic> navigateToQRScanner() {
    return navigateTo('/');
  }

  Future<dynamic> navigateToVoting() {
    return navigateTo('/voting');
  }
}
