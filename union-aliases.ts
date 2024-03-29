// custom types
type Combinable = number | string;
type ConversionDescriptor = "as-text" | "as-number";

function combine(
  var1: Combinable,
  var2: Combinable,
  resultType: ConversionDescriptor
) {
  let result;
  if (
    (typeof var1 === "number" && typeof var2 === "number") ||
    resultType === "as-number"
  ) {
    return (result = +var1 + +var2);
  } else {
    return (result = var1.toString() + var2.toString());
  }
}
// that is the union types ( | )

console.log(combine("marz", "sara", "as-text"));
console.log(combine(18, 11, "as-number"));
