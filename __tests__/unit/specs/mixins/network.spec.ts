import { createLocalVue, shallowMount, Wrapper } from "@vue/test-utils";
import NetworkMixin from "@/mixins/network";
import store from "@/store";
import Vue from "vue";

describe("Mixins > Network", () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    const localVue = createLocalVue();

    const TestComponent = {
      name: "TestComponent",
      template: "<div />",
    };

    wrapper = shallowMount(TestComponent, {
      localVue,
      store,
      mixins: [NetworkMixin],
    });
  });

  describe("networkToken", () => {
    it("should return the set network token", () => {
      store.dispatch("network/setToken", "UCT");
      expect(wrapper.vm.networkToken()).toEqual("UCT");
    });

    it("should return the default network token", () => {
      store.dispatch("network/setToken", null);
      store.dispatch("network/setDefaults", { token: "DEFAULTUCT" });
      expect(wrapper.vm.networkToken()).toEqual("DEFAULTUCT");
    });
    it("should return an empty string if no token has been set", () => {
      store.dispatch("network/setDefaults", {});
      expect(wrapper.vm.networkToken()).toEqual("");
    });
  });
});
