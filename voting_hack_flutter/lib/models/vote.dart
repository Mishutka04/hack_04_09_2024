class Vote {
  final String hackathonId;
  final int rank;
  final String comment;

  Vote({
    required this.hackathonId,
    required this.rank,
    required this.comment,
  });

  factory Vote.fromJson(Map<String, dynamic> json) {
    return Vote(
      hackathonId: json['hackathon_id'],
      rank: json['rank'],
      comment: json['comment'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'hackathon_id': hackathonId,
      'rank': rank,
      'comment': comment,
    };
  }
}
