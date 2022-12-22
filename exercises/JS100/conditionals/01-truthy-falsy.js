function coerceToBoolean(value) {
  console.log(!!value);
  return !!value;
}

coerceToBoolean(null);
coerceToBoolean(undefined);
coerceToBoolean("");
coerceToBoolean(``);
coerceToBoolean("");
coerceToBoolean(0);
coerceToBoolean(-0);
coerceToBoolean(0n);
coerceToBoolean(NaN);
