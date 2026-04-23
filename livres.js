// ===================== DONNÉES DE LA BIBLIOTHÈQUE =====================
// Tous les livres sont organisés par section
// Le champ "couverture" permet d'indiquer le chemin vers une image locale (ex: "images/mon_livre.jpg")
// Laissez vide "" pour utiliser l'icône par défaut

const livres = {
    litterature: [
        { titre: "Idée d'une Histoire universelle au point de vue cosmopolitique", auteur: "Emmanuel KANT", genre: "Philosophie", edition: "Bordas", isbn: "2-04-018061-3", placement: "C1", langue: "Français", langue_origine: "Allemand", traduit: true, type_edition: "moderne", commentaire: "Un texte fondateur sur la philosophie de l'histoire. Lecture exigeante mais enrichissante.", couverture: "kant.jpg" },
        { titre: "Cinq leçons sur la psychanalyse", auteur: "Sigmund FREUD", genre: "Psychanalyse", edition: "Petit Bibliothéque Payot", isbn: "2-228-30849-8", placement: "C1", langue: "Français", langue_origine: "Allemand", traduit: true, type_edition: "moderne", commentaire: "Introduction accessible à la psychanalyse freudienne.", couverture: "" },
        { titre: "La ligne verte", auteur: "Stephen KING", genre: "Roman", edition: "J'ai lu", isbn: "2-290-30186-8", placement: "C2", langue: "Français", langue_origine: "Anglais", traduit: true, type_edition: "moderne", commentaire: "", couverture: "" },
        { titre: "L'École des femmes", auteur: "Molière", genre: "Théâtre", edition: "Bordas", isbn: "2-04-016050-7", placement: "C2", langue: "Français", langue_origine: "français", traduit: true, type_edition: "moderne", commentaire: "Classique du théâtre français. L'édition bilingue permet de comparer le texte original du XVIIe avec une version modernisée.", couverture: "" },
        { titre: "Les Misérables II", auteur: "Victor HUGO", genre: "Littérature FR", edition: "Livre du poche", isbn: "-", placement: "C2", langue: "Français", langue_origine: null, traduit: false, type_edition: "moderne", commentaire: "Chef-d'œuvre absolu. À relire absolument.", couverture: "" },
        { titre: "Le Parfum", auteur: "Patrick Süskind", genre: "Roman", edition: "Le livre de poche", isbn: "-", placement: "C1", langue: "Français", langue_origine: "Allemand", traduit: true, type_edition: "moderne", commentaire: "Roman fascinant sur les obsessions sensorielles.", couverture: "" },
        { titre: "La ferme des animaux", auteur: "George Orwell", genre: "Allégorie", edition: "Folio", isbn: "978-2-07-037516-5", placement: "C1", langue: "Français", langue_origine: "Anglais", traduit: true, type_edition: "moderne", commentaire: "", couverture: "la_ferme_des_animaux.jpg" },
        { titre: "En attendant Godot", auteur: "Samuel Beckett", genre: "Théâtre", edition: "Minuit", isbn: "978-2-7073-0148-2", placement: "C1", langue: "Français", langue_origine: "Français (auteur irlandais)", traduit: false, type_edition: "moderne", commentaire: "Pièce majeure du théâtre de l'absurde.", couverture: "" },
        { titre: "Le mythe de Sisyphe", auteur: "Albert Camus", genre: "Essai", edition: "Folio", isbn: "978-2-07-032288-6", placement: "C1", langue: "Français", langue_origine: null, traduit: false, type_edition: "moderne", commentaire: "Essai philosophique sur l'absurde. Très marquant.", couverture: "" },
        { titre: "Le Cid", auteur: "Pierre Corneille", genre: "Théâtre classique", edition: "GF Flammarion", isbn: "978-2-08-071156-4", placement: "C2", langue: "Français", langue_origine: null, traduit: false, type_edition: "bilingue-ancien-moderne", commentaire: "Chef-d'œuvre de Corneille. Le texte du XVIIe siècle est magnifique.", couverture: "" },
        { titre: "Phèdre", auteur: "Jean Racine", genre: "Théâtre classique", edition: "Folio", isbn: "978-2-07-041367-6", placement: "C2", langue: "Français", langue_origine: null, traduit: false, type_edition: "bilingue-ancien-moderne", commentaire: "La tragédie racinienne dans toute sa splendeur.", couverture: "" },
        { titre: "Les Essais", auteur: "Michel de Montaigne", genre: "Essai philosophique", edition: "PUF", isbn: "978-2-13-058010-2", placement: "C1", langue: "Français (moyen français)", langue_origine: null, traduit: false, type_edition: "bilingue-ancien-moderne", commentaire: "Édition précieuse qui donne le texte original du XVIe siècle en regard de la traduction moderne.", couverture: "" }
    ],
    asie: [
        { titre: "Histoire de ma vie", titre_original: "我这一辈子", auteur: "Lao She", auteur_original: "老舍", genre: "Fiction", edition: "Folio", isbn: "978-2-07-042208-1", placement: "C1", type: "traduction", langue: "Chinois → Français", commentaire: "Un regard poignant sur la Chine du XXe siècle.", couverture: "" },
        { titre: "Élégies de Chu", titre_original: "楚辞", auteur: "Qu Yuan", auteur_original: "屈原", genre: "Poésie", edition: "Folio", isbn: "978-2-07-300474-1", placement: "C1", type: "traduction", langue: "Chinois → Français", commentaire: "Très belle édition bilingue. À lire pour la beauté des caractères chinois.", couverture: "" },
        { titre: "Balzac et la petite tailleuse chinoise", titre_original: "巴尔扎克与小裁缝", auteur: "Dai Sijie", auteur_original: "戴思杰", genre: "Roman", edition: "Folio", isbn: "2-07-041680-1", placement: "C1", type: "bilingue", langue: "Bilingue FR/CN", commentaire: "", couverture: "" },
        { titre: "孽子", titre_original: "孽子", auteur: "白先勇", auteur_original: "Bai Xianyong", genre: "Roman", edition: "Picquier poche", isbn: "2-87730-603-8", placement: "C1", type: "originale", langue: "Chinois", commentaire: "Roman en version originale chinoise. Pour pratiquer la lecture.", couverture: "" },
        { titre: "Le livre de Thé", titre_original: "茶の本", auteur: "OKAKURA Kakuzô", auteur_original: "岡倉覚三", genre: "Essai", edition: "Picquier poche", isbn: "978-2-87730-821-9", placement: "C1", type: "traduction", langue: "Japonais → Français", commentaire: "Un classique sur la philosophie japonaise du thé.", couverture: "" },
        { titre: "Je suis un chat", titre_original: "吾輩は猫である", auteur: "Natsume Sōseki", auteur_original: "夏目漱石", genre: "Roman satirique", edition: "Gallimard", isbn: "978-2-07-070634-1", placement: "C1", type: "traduction", langue: "Japonais → Français", commentaire: "", couverture: "" },
        { titre: "Pachinko", titre_original: "파친코", auteur: "Min Jin Lee", auteur_original: "이민진", genre: "Roman historique", edition: "Harper Collins", isbn: "979-1-0339-0895-1", placement: "C1", type: "traduction", langue: "Coréen → Français", commentaire: "Saga familiale coréenne bouleversante.", couverture: "" }
    ],
    academique: [
        { titre: "Les indispensables Mathématiques et Physique-Chimie", auteur: "Alexandre MOATTI", genre: "Sciences", edition: "Odile Jacob", isbn: "978-2-7381-1722-9", placement: "C1", langue: "Français", commentaire: "Ouvrage de référence pour les révisions.", couverture: "" },
        { titre: "La symphonie des nombres premiers", auteur: "Marcus du Sautoy", genre: "Maths", edition: "Points", isbn: "978-2-7578-0429-2", placement: "C1-T", langue: "Français", commentaire: "Fascinant voyage dans le monde des mathématiques.", couverture: "" }
    ],
    autres: [
        { titre: "Chattitudes", auteur: "Sayo Koizumi", genre: "Sur les chats", edition: "Larousse", isbn: "978-2-03-5879330-1", placement: "C1", langue: "Français", commentaire: "", couverture: "" },
        { titre: "Le Japonais en 5 minutes par jour", auteur: "Vincent Grépinet", genre: "Langue", edition: "First", isbn: "978-2-412-04165-9", placement: "C1", langue: "Français", commentaire: "Méthode rapide pour apprendre les bases du japonais.", couverture: "" }
    ],
    turc: [
        { titre: "Gılgamış Destanı", auteur: "Mehmet Ali Atak", genre: "Tarih", edition: "Anonim", isbn: "978-605-100-384-1", placement: "C1", langue: "Turc", commentaire: "L'épopée de Gilgamesh en turc.", couverture: "" },
        { titre: "Gazi Mustafa Kemal ATATÜRK", auteur: "İlber Ortaylı", genre: "Tarih", edition: "Kronik", isbn: "978-975-2430-29-7", placement: "C1", langue: "Turc", commentaire: "Biographie de référence d'Atatürk.", couverture: "" }
    ],
    etranger: [
        { titre: "Harry Potter and the Philosopher's Stone", auteur: "J.K. Rowling", genre: "Fantasy", edition: "Bloomsbury", isbn: "978-0-7475-7447-7", placement: "C1", langue: "Anglais", commentaire: "Version originale. Idéal pour progresser en anglais.", couverture: "" },
        { titre: "Jane Eyre", auteur: "Charlotte Brontë", genre: "Roman", edition: "Harrap's", isbn: "978-2-81-870835-4", placement: "CM", langue: "Anglais", commentaire: "", couverture: "" }
    ],
    petitprince: [
        { titre: "Le Petit Prince", auteur: "Saint-Exupéry", genre: "Conte", edition: "Folio", isbn: "2-07-040850-7", placement: "C1", langue: "Français", commentaire: "L'original en français. Une merveille à chaque relecture.", couverture: "" },
        { titre: "小王子", auteur: "Saint-Exupéry", genre: "Conte", edition: "果麦", isbn: "978-7-201-07764-2", placement: "C1", langue: "Chinois", commentaire: "Version chinoise du Petit Prince. Très utile pour apprendre.", couverture: "" }
    ],
    manga: [
        { titre: "Magus of the Library", auteur: "Mitsu Izumi", genre: "Manga", edition: "-", isbn: "979-10-327-0467-7", placement: "T", tome: "1", langue: "Français", commentaire: "Manga magnifique sur la passion des livres et des bibliothèques.", couverture: "" }
    ]
};