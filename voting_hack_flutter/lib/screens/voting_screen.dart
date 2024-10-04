import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../controllers/voting_controller.dart';
import '../state/state_management.dart';

class VotingScreen extends StatefulWidget {
  const VotingScreen({super.key});

  @override
  _VotingScreenState createState() => _VotingScreenState();
}

class _VotingScreenState extends State<VotingScreen> {
  final _formKey = GlobalKey<FormState>();
  int? _rank;
  String? _comment;

  @override
  Widget build(BuildContext context) {
    final controller = VotingController(
      apiService: Provider.of(context, listen: false),
      stateManagement: Provider.of(context, listen: false),
    );

    return Scaffold(
      appBar: AppBar(
        title: const Text('Vote for Team'),
      ),
      body: Form(
        key: _formKey,
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Consumer<StateManagement>(
                builder: (context, stateManagement, child) {
                  final hackathon = stateManagement.currentHackathon;
                  if (hackathon != null) {
                    return Text('Voting for: ${hackathon.name}');
                  }
                  return const SizedBox.shrink();
                },
              ),
              const SizedBox(height: 20),
              TextFormField(
                decoration: const InputDecoration(labelText: 'Rank (1-5)'),
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter a rank';
                  }
                  int? rank = int.tryParse(value);
                  if (rank == null || rank < 1 || rank > 5) {
                    return 'Please enter a valid rank between 1 and 5';
                  }
                  return null;
                },
                onSaved: (value) => _rank = int.parse(value!),
              ),
              const SizedBox(height: 20),
              TextFormField(
                decoration: const InputDecoration(labelText: 'Comment'),
                maxLines: 3,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter a comment';
                  }
                  return null;
                },
                onSaved: (value) => _comment = value,
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: () async {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    await controller.submitVote(_rank!, _comment!);
                  }
                },
                child: const Text('Submit Vote'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
