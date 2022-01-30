namespace CopperSharp.Block;

/// <summary>
/// Represents a tile entity that can be snowy
/// </summary>
public interface ISnowable : ITileEntity
{
    /// <summary>
    /// Sets whether this tile entity is snowy
    /// </summary>
    /// <param name="snowy">Whether to make this tile entity snowy</param>
    /// <returns>This snowable entity</returns>
    public ISnowable Snowy(bool snowy);
}