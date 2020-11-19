import { Identities } from "@unitcareecosystem/crypto";

export default {
  methods: {
    addressFromPublicKey(publicKey: string): string {
      return Identities.Address.fromPublicKey(publicKey);
    },
    addressFromMultiSignatureAsset(asset): string {
      return Identities.Address.fromMultiSignatureAsset(asset);
    },
  },
};
