import '../services/api_service.dart';
import '../state/state_management.dart';
import '../models/vote.dart';

class VotingController {
  final APIService apiService;
  final StateManagement stateManagement;

  VotingController({
    required this.apiService,
    required this.stateManagement,
  });

  Future<void> submitVote(int rank, String comment) async {
    final hackathon = stateManagement.currentHackathon;
    if (hackathon == null) {
      throw Exception('No hackathon selected');
    }

    final vote = Vote(
      hackathonId: hackathon.id,
      rank: rank,
      comment: comment,
    );

    try {
      final success = await apiService.submitVote(vote);
      if (success) {
        stateManagement.updateVotingState(vote);
        // Here you might want to show a success message or navigate to a new screen
      } else {
        throw Exception('Failed to submit vote');
      }
    } catch (e) {
      print('Error submitting vote: $e');
      // Here you might want to show an error message to the user
    }
  }
}
