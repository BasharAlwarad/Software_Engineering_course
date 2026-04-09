using System.ComponentModel.DataAnnotations;
 
public record JournalEntryRequestDto(
    [property: Required]
    [property: StringLength(100, MinimumLength = 3)]
    string Title,
    [property: Required]
    [property: StringLength(10_000, MinimumLength =20)]
    string Content
);