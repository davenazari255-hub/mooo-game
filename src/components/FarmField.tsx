"use client";

/**
 * FarmField — the fenced plot in the middle of the screen.
 *
 * The illustration (grass, trees, wooden fence and empty soil tiles) is the
 * user-supplied asset `farm-field.jpg`, shown as a cover background so it
 * always fills the scene area. Plant growth sprites will later be overlaid
 * on the tiles once those art assets are provided.
 */
export default function FarmField() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/assets/farm-field.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 42%",
        }}
      />
    </div>
  );
}
