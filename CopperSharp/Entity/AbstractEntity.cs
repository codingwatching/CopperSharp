using CopperSharp.Data.SNbt;
using CopperSharp.Text;
using CopperSharp.Utils;

namespace CopperSharp.Entity;

/// <summary>
/// A global interface for entity
/// </summary>
public abstract class AbstractEntity
{
    private Dictionary<string, bool> _bools = new();

    /// <summary>
    /// Constructs a new abstract entity with provided type
    /// </summary>
    /// <param name="type">Type of this entity</param>
    protected AbstractEntity(EntityType type)
    {
        Type = type;
    }

    /// <summary>
    /// Type of this entity
    /// </summary>
    public EntityType Type { get; }

    private short Air { get; set; } = -1;
    private IComponent? CustomName { get; set; } = null;
    private Vec3 Motion { get; set; } = new(0, 0, 0);
    private Vec2 Rotation { get; set; } = new(0, 0);
    private List<AbstractEntity> Passengers { get; } = new();

    /// <summary>
    /// Disables gravity for this entity
    /// </summary>
    /// <returns></returns>
    public AbstractEntity DisableGravity()
    {
        _bools["NoGravity"] = true;
        return this;
    }

    /// <summary>
    /// Makes this entity silent, not making any noise at all
    /// </summary>
    /// <param name="silent">Whether to make this entity silent</param>
    /// <returns>This entity</returns>
    public AbstractEntity SetSilent(bool silent)
    {
        _bools["Silent"] = silent;
        return this;
    }

    /// <summary>
    /// Makes the entity immune to all attacks
    /// </summary>
    /// <param name="immune">Whether to make entity immune to all attacks</param>
    /// <returns>This entity</returns>
    public AbstractEntity Invulnerability(bool immune = true)
    {
        _bools["Invulnerable"] = immune;
        return this;
    }

    /// <summary>
    /// Configures the left amount of breathing air for this entity
    /// </summary>
    /// <returns>This entity</returns>
    public AbstractEntity BreathingAirLeft(short air)
    {
        Air = air;
        return this;
    }

    /// <summary>
    /// Adds a visual-only fire effect to this entity
    /// </summary>
    /// <returns>This entity</returns>
    public AbstractEntity VisualFire()
    {
        _bools["HasVisualFire"] = true;
        return this;
    }

    /// <summary>
    /// Applies a glowing effect to this entity
    /// </summary>
    /// <param name="glow">Whether the entity should glow</param>
    /// <returns>This entity</returns>
    public AbstractEntity Glow(bool glow = true)
    {
        _bools["Glowing"] = glow;
        return this;
    }

    /// <summary>
    /// Sets custom name of this entity
    /// </summary>
    /// <param name="name">New name of this entity</param>
    /// <param name="alwaysVisible">Whether the name should be always visible</param>
    /// <returns>This entity</returns>
    public AbstractEntity Name(IComponent name, bool alwaysVisible = false)
    {
        CustomName = name;
        _bools["CustomNameVisible"] = alwaysVisible;
        return this;
    }

    /// <summary>
    /// Applies a provided rotation to this entity
    /// </summary>
    /// <returns>This entity</returns>
    public AbstractEntity Rotate(Vec2 rotation)
    {
        Rotation = rotation;
        return this;
    }

    /// <summary>
    /// Applies a provided rotation to this entity
    /// </summary>
    /// <param name="pitch">Pitch rotation of this entity</param>
    /// <param name="yaw">Yaw rotation of this entity</param>
    /// <returns>This entity</returns>
    public AbstractEntity Rotate(float pitch, float yaw)
    {
        Rotation = new Vec2(pitch, yaw);
        return this;
    }

    /// <summary>
    /// Applies a provided velocity to this entity
    /// </summary>
    /// <param name="motion">Velocity to be applied</param>
    /// <returns>This entity</returns>
    public AbstractEntity Velocity(Vec3 motion)
    {
        Motion = motion;
        return this;
    }

    /// <summary>
    /// Gets velocity of this entity
    /// </summary>
    /// <returns>This entity's velocity</returns>
    public Vec3? Velocity() => Motion;

    /// <summary>
    /// Gets rotation of this entity
    /// </summary>
    /// <returns>This entity's rotation</returns>
    public Vec2? EntityRotation() => Rotation;

    /// <summary>
    /// Adds all provided entities as passengers to this entity
    /// </summary>
    /// <param name="passengers">Passengers to be added</param>
    /// <returns>This entity</returns>
    public AbstractEntity AddPassengers(params AbstractEntity[] passengers)
    {
        Passengers.AddRange(passengers);
        return this;
    }

    /// <summary>
    /// Serializes extra data from this inheritor
    /// </summary>
    /// <param name="sw">Writer to which the data should be written</param>
    protected virtual void SerializeExtra(StringNbtWriter sw)
    {
    }

    /// <summary>
    /// Serializes this entity into SNBT
    /// </summary>
    /// <returns>Serialized entity</returns>
    public string Serialize(bool includeType = true)
    {
        using var sw = new StringWriter();
        using var w = new StringNbtWriter(sw);

        w.WriteBeginCompound();

        foreach (var (key, value) in _bools)
        {
            w.WritePropertyName(key);
            w.WriteBool(value);
        }

        if (Air != -1)
        {
            w.WriteShort("Air", Air);
        }

        if (CustomName != null)
        {
            w.WriteString("CustomName", CustomName.Serialize());
        }

        w.WritePropertyName("Motion");
        w.WriteBeginArray();
        w.WriteFloat(Motion.DX);
        w.WriteFloat(Motion.DY);
        w.WriteFloat(Motion.DZ);
        w.WriteEndArray();
        w.WriteComma();

        w.WritePropertyName("Rotation");
        w.WriteBeginArray();
        w.WriteFloat(Rotation.Yaw);
        w.WriteFloat(Rotation.Pitch);
        w.WriteEndArray();

        if (Passengers.Any())
        {
            w.WriteComma();
            w.WritePropertyName("Passengers");
            w.WriteBeginArray();
            foreach (var passenger in Passengers)
            {
                w.WriteRawValue(passenger.Serialize(false));
            }

            w.WriteEndArray();
        }

        SerializeExtra(w);

        if (!includeType)
            w.WriteString("id", Type.Id.ToString());
        w.WriteEndCompound();
        return $"{(includeType ? Type.Id.ToString() : "")}{sw}";
    }
}