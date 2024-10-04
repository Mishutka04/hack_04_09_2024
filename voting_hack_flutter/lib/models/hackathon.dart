class Hackathon {
  final String id;
  final String name;
  final DateTime date;

  Hackathon({
    required this.id,
    required this.name,
    required this.date,
  });

  factory Hackathon.fromJson(Map<String, dynamic> json) {
    return Hackathon(
      id: json['id'],
      name: json['name'],
      date: DateTime.parse(json['date']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'date': date.toIso8601String(),
    };
  }
}
