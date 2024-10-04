import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/hackathon.dart';
import '../models/vote.dart';

class APIService {
  final String baseUrl =
      'https://api.example.com'; // Replace with your actual API base URL

  Future<Hackathon> getHackathonDetails(String qrCode) async {
    final response = await http.get(Uri.parse('$baseUrl/hackathons/$qrCode'));

    if (response.statusCode == 200) {
      return Hackathon.fromJson(json.decode(response.body));
    } else {
      throw Exception('Failed to load hackathon details');
    }
  }

  Future<bool> submitVote(Vote vote) async {
    final response = await http.post(
      Uri.parse('$baseUrl/votes'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(vote.toJson()),
    );

    if (response.statusCode == 201) {
      return true;
    } else {
      throw Exception('Failed to submit vote');
    }
  }
}
