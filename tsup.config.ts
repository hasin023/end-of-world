import { defineConfig } from "tsup";

export default defineConfig({
	format: ["cjs", "esm"],
	entry: ["./src/mod.ts"],
	dts: true,
	shims: true,
	skipNodeModulesBundle: true,
	clean: true,
});
