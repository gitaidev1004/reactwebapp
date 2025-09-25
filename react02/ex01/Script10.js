const user = { profile: { name: "기태" } };
console.log(user.profile?.name); // "기태"
console.log(user.address?.city); // undefined (오류 없이)