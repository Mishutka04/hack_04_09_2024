import 'package:flutter/foundation.dart';
import '../models/hackathon.dart';
import '../models/vote.dart';

class StateManagement with ChangeNotifier {
  Hackathon? _currentHackathon;
  Vote? _currentVote;

  Hackathon? get currentHackathon => _currentHackathon;

  Vote? get currentVote => _currentVote;

  void updateHackathonState(Hackathon hackathon) {
    _currentHackathon = hackathon;
    notifyListeners();
  }

  void updateVotingState(Vote vote) {
    _currentVote = vote;
    notifyListeners();
  }

  void clearState() {
    _currentHackathon = null;
    _currentVote = null;
    notifyListeners();
  }
}
